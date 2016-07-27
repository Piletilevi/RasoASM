# coding: utf-8

import os
import github3

language = os.environ['plp_language']
repo = github3.repository('Piletilevi', 'RasoASM')
print (repo)
dir_contents = repo.directory_contents('/')
print('dir_contents:{0}'.format(dir_contents))

contents = repo.file_contents('update.py')
print(contents.decoded)
fo = open('file2.txt','w')
fo.write(contents.decoded)
fo.close()

# print('contents.name:{0}'.format(contents.name))

exit()
