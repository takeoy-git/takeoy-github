# マークダウン（拡張子.md）について  
## プレビューの方法
Shift + Ctrl + V  
## 記法のエスケープ処理
バックスラッシュ\  
## 改行
半角スペース2個  
段落＝Enter改行を2回

## 「見出し」の書き方
♯＝< h1>  
♯♯=< h2>  
♯×6=<~h6>  

## 「箇条書き」の書き方
ハイフン(\-)=箇条書き  
数字コンマ(1.)=番号付き箇条書き
例
- 箇条書き１  
- 箇条書き２
  
1. 番号箇条書き１  
2. 番号箇条書き２  

## リンクの書き方
- リンク \[　]\(url)  
例　\[yahoo]\(https:~.co.jp)→ ```<p><a href=”https:~.jp”></a><p>```  

- 画像挿入＝\!\[alt] (https:~.png)

## ■体裁  
- ＞ 引用→　引用マークがつく
- ＞＞多重引用
- インライン要素＝バッククオート@＋Shift　``
- ブロック要素＝‘’‘　’‘’（バッククオート×３）

## ■文字装飾  
- 斜体：*～*
- 太字：\**～**　<\strong>
- 訂正線：\~~　\~~　<\s>
- 水平線：--- →　線が引かれる

## ■テーブル例  
名前|年齢
-|-
山田|20
佐藤|30

# gitのコマンド  
ワークツリ→ステージングエリア→ローカルリポジトリ  
ステージングエリアの存在意義→複数ファイルある際に、該当ファイルのみの変更履歴のみをローカルリポジトリへ更新できる。  
CLI command line interface  
git bash内でのコマンド  
pwd (現在位置    
git init (initialized初期化  
ls -a (list filesカレントディレクトリ内のファイル一覧を表示。ドット.も表示=-a  
touch file.text (file.textファイルを作成  
ls (カレントディレクトリ内にあるファイルの一覧  
git add file.text (ワークツリーから ステージングエリアにAddした  
git ls-files (ステージングエリア内のファイル一覧を表示しAdd内容の確認  
git commit -m "~~" (ステージングエリアからリポジトリへcommit. その際のメッセージ(-m)を”～～”で記載する（必須)  
git log (コミット履歴を確認する  
git log --stat (statistic統計情報込みで出力→　ファイル名や変更回数もわかる  
code file.txt (VScode=codeで、file.txtを開く。 atom file.txtならatomエディタでファイルを開く  
git diff (ファイルの変更差分を表示  
//出力内容  
diff --git a/file.txt b/file.txt　（a=前ファイル、b=変更後ファイル  
index e69de29..c0fb528 100644  
--- a/file.txt  
+++ b/file.txt  
@@ -0,0 +1 @@　（aファイルの表示行、bファイルの表示行  
+Helllllow world!　（追加された内容＋、削除された内容ー  
\ No newline at end of file  
//出力以上  
git commit -a -m "Hello追加"　（commitを行うかつaddも同時に行う（-aオプション）,メッセージを加える(-mオプション）  
git log (変更履歴を表示　念のため確認用  
git diff (差分＝ワークツリとステージングエリアの差　はない。ことを念のため確認  

git diff cached ( ローカルリポジトリとステージングエリアの差分を表示  
git diff HEAD (現在参照しているコミットと、ワークツリーの差分を表示  

#git status (➀ワークツリー内の複数あるファイルのうちどのファイルがバージョン管理対象外かを調べるumtracked files=対象外→addしていく、②ワークツリー内にaddされていない変更はないか。③コミットされていない変  更はないか
git add . (ワークツリーのファイルをステージングエリアに追加。ドットはすべてのファイルを対象に追加する  
get ls-files （で確認  

#ステージングエリアのみから削除  
touch log.txt　（ファイル作成  
ls　（カレントディレクトリのファイル  
git add log.txt　（gitのワークツリーに追加  
git ls-files　（gitのファイルをリスト化表示  
git rm --cached log.txt (rm=remove, cached=ステージングエリアを指す  
git ls-files （確かにファイルが削除されている  
ls　（カレントディレクトリ内にはまだ存在する  

#ファイル削除  
Git rm –cached log.txt (ステージングエリアからの削除  
Git rm log.txt (ワークツリーからの削除  
Git rm -r ディレクトリ名 (ディレクトるを管理下から削除  
git rm -f log.txt　（f=force removal強制削除  

■管理しないファイルを指定する（git add . で除外）  
Ls  
Touch log.txt (管理しないファイルをつくる  
Touch .gitignore（管理しないファイルを指定するフォルダ  
Ls -a  
Code .gitignore (.gitignoreをVScodeで開く  
VScode内＞log.txt と記入し保存＞gitbashに戻る  
  
■名前の変更  
Git mv newfile.txt new_file.txt (newfile.txt→new_file.txtへ名前変更  
Git status  
Git ls-files (ステージングエリアのファイルを確認  

### git checkout \~~ (~~へブランチを切り替え)
