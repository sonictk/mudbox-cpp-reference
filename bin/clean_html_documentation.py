#!/usr/bin/env python
"""
This module is a script that cleans up the default HTML Mudbox Doxygen
documentation to be usable as standalone.
"""
import argparse
import logging
import multiprocessing
import os
import shutil
from bs4 import BeautifulSoup
from lib import chunk


def format_file(all_files, docs_path, output_path):
    """
    This function formats the ``list`` of HTML documentation files given and
    writes the output files to a subdirectory.
    """
    logger = logging.getLogger(__name__)
    for i, f in enumerate(all_files):
        if os.path.splitext(f)[-1] != '.html':
            continue

        html = open(os.path.join(docs_path, f)).read()
        soup = BeautifulSoup(html, 'html.parser')
        for link in soup.find_all('a'):
            href = link.get('href')
            if href and '#!/url=./cpp_ref/' in href:
                new_href = href.replace('#!/url=./cpp_ref/', './')
                link['href'] = new_href

        # NOTE: CSS files go in the ``style`` directory
        for css_link in soup.find_all('link'):
            css_href = css_link.get('href')
            if '.css' in css_href:
                new_css_href = css_href.replace('style/', '../style/')
                new_css_href = new_css_href.replace('cpp_ref/', '../style/')
                css_link['href'] = new_css_href

        for img in soup.find_all('img'):
            src = link.get('src')
            if src:
                new_src = src.replace('cpp_ref/', './')
                src['src'] = new_src

        # for script in soup.find_all('script'):
        #     script_src = script.get('src')
        #     if script_src:
        #         script_name = os.path.basename(script_src)
        #         new_script_src = '../scripts/' + script_name
        #         script['src'] = new_script_src

        # Also insert anchors in order for table of contents to work
        for td in soup.find_all('td'):
            if td.get('class') and 'memname' in td.get('class') and td.a:
                member_name = td.contents[-1]
                if member_name and len(member_name) > 2:
                    splits = member_name.split(' ')
                    if len(splits) < 3:
                        member_name = splits[-1]
                    else:
                        member_name = splits[-2]
                    new_tag = soup.new_tag('a')
                    new_tag['name'] = '//apple_ref/cpp/Function/{0}'.format(member_name)
                    new_tag['class'] = 'dashAnchor'
                    td.insert(0, new_tag)

        with open(os.path.join(output_path, f), 'w') as of:
            of.write(str(soup))

    logger.debug('Job complete!')


def main(mudbox_version, docs_path, output_path):
    """This is the main entry point of the program."""

    logger = logging.getLogger(__name__)

    if not os.path.isdir(docs_path):
        raise IOError('The directory: {0} does not exist!'
                .format(docs_path))

    logger.info('Formatting documentation...')

    if os.path.isdir(output_path):
        logger.info('Removing existing directory...')
        shutil.rmtree(output_path)
    os.makedirs(output_path)

    all_files = os.listdir(docs_path)
    logger.debug('Total number of files to process: {0}'.format(len(all_files)))

    for f in all_files:
        if f.endswith('.js'):
            shutil.copy(os.path.join(docs_path, f), output_path)

            # NOTE: Copy to a second directory since some of the script links are
            # dynamically generated.
            scripts_dir = os.path.join(output_path, 'scripts')
            if not os.path.isdir(scripts_dir):
                os.makedirs(scripts_dir)
            try: shutil.copy(os.path.join(docs_path, f), scripts_dir)
            except:
                print('failed to copy: {}'.format(f))


    for f in all_files:
        if f.endswith('.png'):
            shutil.copy(os.path.join(docs_path, f), output_path)

            # NOTE: Copy to a second directory since some of the image links are
            # dynamically generated.
            images_dir = os.path.join(output_path, 'cpp_ref')
            if not os.path.isdir(images_dir):
                os.makedirs(images_dir)
            shutil.copy(os.path.join(docs_path, f), images_dir)

    for f in all_files:
        if f.endswith('.css'):
            shutil.copy(os.path.join(docs_path, f), os.path.join(os.path.dirname(output_path), 'style'))

    num_threads = 4
    chunk_size = len(all_files) / num_threads
    jobs = []
    for s in chunk(all_files, chunk_size):
        job = multiprocessing.Process(target=format_file, args=(s, docs_path, output_path))
        jobs.append(job)

    logger.debug('Num. of jobs scheduled: {0}'.format(len(jobs)))
    [j.start() for j in jobs]
    logger.info('Jobs submitted, please wait for them to complete!')


if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)
    parser = argparse.ArgumentParser(description='This program formats the HTML documentation so that it is usable in the docset.')
    parser.add_argument('-mv',
                        '--mudboxVersion',
                        default='2018',
                        help='The mudbox version to generate the docset for.')

    docs_path = os.path.join(os.path.dirname(
                            os.path.dirname(os.path.abspath(__file__))
                        ),
                          'mudbox-2018-cpp-reference.docset',
                          'Contents',
                          'Resources',
                          'Documents',
                          'cpp_ref')
    parser.add_argument('-i',
                        '--input',
                        default=docs_path,
                        help='The directory that contains all the HTML files.')

    output_path = os.path.join(docs_path, 'output')
    parser.add_argument('-o',
                        '--output',
                        default=output_path,
                        help='The directory to write all the formatted files to.')

    args = parser.parse_args()
    main(args.mudboxVersion, args.input, args.output)
