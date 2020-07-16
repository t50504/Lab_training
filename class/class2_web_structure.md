## web structure overview

- ref: https://www.youtube.com/watch?v=W40mDCqWyYo
<img src='https://raw.githubusercontent.com/t50504/Lab_training/master/image/django_frame.jpg'>

## front end
- Nice tutorial: w3school
### HTML
- 網頁的骨幹，所有的網頁元素都是由基本的html元素構成，是一種語法可供瀏覽器解析，詳細教學請啃 HTML Tutorial，'至少'看到HTML Forms的部分。
### CSS
- 網頁的外貌，用來排版、裝飾HTML元素，詳細教學請啃 CSS Tutorial，'至少'看到CSS Navigation Bar的部分。 並請額外看Flexbox部分，是比較新的網頁CSS排版技術。

- exercise1 刻出自我介紹的靜態網頁，須包含三張照片並排、照片的背景區要淺灰色(隨意，不用自己的照片)，並且內容條列式、加註重點，並且附上自己臉書的連結。所有內容須置中。

- 額外補充1:牽涉到設計的部分很需要美感，所以大多工程師都會先選擇套用Bootstrap模板，再修改細部，有空可以練習怎麼使用bootstrap。

###Javascript
- 網頁的靈魂，使網頁具有互動性，並操作html dom元件，前端網頁的好壞，很大部分取決於js寫的好不好，跟java沒有關係!!，詳細教學請啃JavaScript Tutorial，這是一套完整的程式語言，隨著網路發達、網頁發展非常需要會寫js的人才，能全部看完最好。

- 額外補充1:AJAX技術，這是碩論網站必須用到的技巧，也是現在各大網頁都有用的技巧，上手需一段時間，有額外時間可以多練習。AJAX就是網頁非同步技術，在使用者操作時，不會一直重新更新整個網頁，而是僅改變使用者操作的部分，可以聯想GMAIL,在點信件時，並不會整個頁面刷新，而是只有內容區域更動。
技術原理是利用JS語言，寫一隻程式在伺服器接收請求之前先獲取請求，並由這支程式將預先向伺服器請求的資訊回應給使用者的瀏覽器，如此達到不用頻繁向伺服器請求及響應的目的，增快網頁效能。

- 額外補充2:JQuery是基於JS所開發出來的套件，使用方便有效率、但有辦不到的功能還是要靠js刻出來，所以可斟酌使用但不必過度依賴。

- 額外補充3:現在因應快速開發網頁需求，有許多JS框架誕生，讓開發者只要會使用框架就能讓網頁具備強大功能，如React.js、vue.js、angular.js，有興趣可以自學，輕量級且上手較快、較年輕的框架是中國人開發的vue.js，可以先從此上手。

###Conclusion
- css跟js當然都可以放在html檔裡面，但這並不是推薦的做法，會造成邏輯跟排版紊亂。比較好的做法是將css跟js檔案分開成獨立檔案，並由html引入即可。
- exercise2 承第一題，請從以下效果挑出三種來實現在你的靜態網頁上。 ex: toggle、hover、彈出框後周圍暗掉、錨點...or others.
