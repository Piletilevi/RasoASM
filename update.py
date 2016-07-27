# coding: utf-8

import os
import github3
import json

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

print( 'l:{0} vs. r:{1}'.format(l_ver, r_ver))
if (l_ver != r_ver):
    with open('package.json','w') as package_file:
        package_file.write(repo.file_contents('package.json').decoded)
