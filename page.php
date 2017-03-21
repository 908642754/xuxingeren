<?php
header('Content-Type:text/html; charset=utf-8');
require 'config.php';
// 总记录数  
$query = "SELECT id  FROM  question ";  
$totalnums = totalnums($query);  
  
// 每页显示条数  
$fnum = 8;  
  
// 翻页数  
$pagenum = ceil($totalnums / $fnum);  
  
// 页数常量  
@$tmp = $_GET['page'];  
  
//防止恶意翻页  
if ($tmp > $pagenum)  
    echo "<script>window.location.href='index.php'</script>";  
  
//计算分页起始值  
if ($tmp == "") {  
    $num = 0;  
} else {  
    $num = ($tmp - 1) * $fnum;  
}  
  
// 查询语句  
$query = mysql_query("SELECT (SELECT COUNT(*) FROM comment WHERE titleid=a.id) AS count,a.id,a.title,a.content,a.user,a.date FROM question a ORDER BY a.date DESC LIMIT ". $num . ",$fnum") or die('SQL 错误！');
	$result = doresult($query);  
	$json = '';
	
	while (!!$row = mysql_fetch_array($query, MYSQL_ASSOC)) {
		foreach ( $row as $key => $value ) {
			$row[$key] = urlencode(str_replace("\n","", $value));
		}
		$json .= urldecode(json_encode($row)).',';
	}
	
	echo '['.substr($json, 0, strlen($json) - 1).']';

  
// 遍历输出
  
// 翻页链接  
for ($i = 0; $i < $pagenum; $i ++) {  
    echo "<a href=index.php?page=" . ($i + 1) . ">" . ($i + 1) . "</a>";  
}  
?>