# coding: utf-8

from os import environ, path, chdir
from sys import argv
from subprocess import call


language = environ['plp_language']
splitext = path.splitext(argv[0])

bat_path = '{0}_{1}{2}'.format(splitext[0], language, '.bat')
basename = path.basename(bat_path)
dirname = path.dirname(bat_path)

chdir(dirname)
call(basename)
