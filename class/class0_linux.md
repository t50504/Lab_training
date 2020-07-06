#### Introduction
- 實驗室伺服器及外面公司伺服器大多都是linux系統，比起windows有以下好處:
開源、多用戶多任務、穩定及高效、安全。
___As a programmer,you should learn work on linux!___
- 伺服器中分為管理者與使用者，管理者就是天神，可以對伺服器做任何事。使用者則權限有限，僅對自己帳號下的資料夾有百分百權限。
- 在管理者創建帳號給使用者後，就可以透過pietty(putty)等ssh連線工具及filezila檔案傳輸工具，遠端連到伺服器並在linux系統下工作及檔案傳輸。
- Recommended doc:[鳥哥的linux私房菜](http://linux.vbird.org/)
#### Preparation
##### For server(linux work station)
- 檔案傳輸[Filezilla](https://filezilla-project.org/)
- 終端介面SSH連線工具[pietty](https://sites.google.com/view/pietty-project/download)
##### For local (windows)
- 新手入門整合介面[Anaconda](https://www.anaconda.com/products/individual)
    - jupyter notebook
    - python IDE:spyder
    - vscode
- ___demo in class___
#### basic operation
- ls :列出資料檔案
    - ls -l 列出詳細資訊。
    - ls -a 連隱藏資料一起列出。
- mkdir/rm -r:創建/刪除 資料夾。
- cd :進入退出資料夾。
    - cd ./examples 進入目前資料夾下的examples資料夾。
    - cd ~ 移回家目錄 (家目錄介紹)。
    - cd .. 移動到上一層目錄
- cp a b: 複製檔案a為檔案b。
- mv a b: 移動檔案a到位置b，或是改檔案名。
- rm a: 刪除檔案a。
- cat filename: 文件內容印出在終端介面。
- less filename: 進入文件內查看，透過上下鍵捲動。
    - :100, 移動到文件內第一百行。
    - :G ,直接移動到底
    - /str, 搜尋字串，按n跳下一個。
- 其他請自行多研究，還有很多實用語法。
- <font color='#0000dd'>exercise1</font>:
請創建test1、test2 folder，並進入test1創建practice.txt內容隨意。複製此檔案命名為practice2.txt，並將practice2 move到test2 folder。
#### vim文件編輯器
- vi:文件編輯器，後+filename則可以直接創建並編寫。
(i進入編輯模式，esc離開編輯模式、:wq存檔並退出)
- 在預設模式下，一樣利用上下鍵捲動頁面，滑鼠沒有用到，鍵盤右邊九宮格都不能用。
    - 大寫V可以選取目前游標所在整行，小寫v可以依照移動游標選取，選取後按下y是複製,d是剪下，之後p是貼上。
- 編輯完畢並離開編輯模式後，打:q離開編輯檔案，:w存檔，:wq = :x 存檔並退出 
#### run python code on server
- python filename.py
- pip install {package name}
#### different environment
- 創建虛擬環境非常重要，如果有很多人用同一台伺服器，可以避免環境跟套件亂七八糟；若自己有好幾個project，也可以用不同的虛擬環境，套件跟設定僅針對單一project即可。
- [virtualenvwrapper tutorial](https://www.itread01.com/content/1498915331.html)
- 加上 --python=pythonX 指定創建使用python 版本。
-  mkvirtualenv -p /usr/bin/pythonX [env name]
- 當啟動一個新的虛擬環境，可以理解重新套用了一份配置檔，在虛擬環境內的配置都是編寫這份專屬於此虛擬環境的配置檔。所以請養成好習慣，對自己的專案做好環境管理。
- <font color='#0000dd'>exercise3</font>:
請創建project_A 與project_B兩個虛擬環境要有不同的Python版本，並在A裝套件numpy,B裝套件pandas。

#### Be a good user in lab linux work station.
- command: df -h 確認掛載在home目錄的硬碟空間
- command: htop(or top) 查看伺服器的硬體使用情形，評估自己的程式有沒有掛掉或不要占用過多CPU與MEM。否則會影響其他使用者
