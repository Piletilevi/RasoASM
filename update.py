# coding: utf-8

import os
import github3
import json
from sys import stdout

language = os.environ['plp_language']

if ('gh_token' in os.environ):
    gh = github3.login(token = os.environ['gh_token'])

repo = github3.repository('Piletilevi', 'RasoASM')

def version_info():
    with open('package.json', 'rU') as package_file:
        local_package = json.load(package_file)
    contents = repo.file_contents('package.json')
    remote_package = json.loads(contents.decoded)
    return (local_package['version'], remote_package['version'])

l_ver, r_ver = version_info()

files2update = [
    'update.py',
    'fiscal_lt.bat',
    'fiscal_lt.ipy',
    'fiscal.py',
    'package.json',
    'fiscal_lt.bat',
]
print( 'l:{0} vs. r:{1}'.format(l_ver, r_ver))
if (l_ver != r_ver):
    for filename in files2update:
        stdout.write('Update %s ...' % filename)
        with open(filename,'w') as package_file:
            package_file.write(repo.file_contents(filename).decoded)
            print(' done.')
