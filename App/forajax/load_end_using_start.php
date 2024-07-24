<?php
include "../connection.php";
$start=$_GET["start"];
$res=mysqli_query($link,"Select * from distance where start='$start'");
?>
<select class="nend" id="nend">
<option>Select</option>
<?php
while($row=mysqli_fetch_array($res))
{
    echo "<option>";
    echo $row["end"];
    echo "</option>";
}
?>
</select>