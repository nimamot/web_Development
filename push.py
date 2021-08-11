import os
cm = input("coment: ")
os.system("git add .")
os.system(f'git commit -m "{cm}" ')
os.system("git push")
os.system("git status")
