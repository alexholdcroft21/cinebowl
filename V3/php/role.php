<table id="contentBox" cellpadding="0" cellspacing="0" width="100%">
    <tr>
    	<td colspan="2" style="padding-left:34px">
        <form name="films" action="/films/" method="post">
        	<?
			$sql = "Select films_id, film_title from films ";
			$sql .= "where films_id in (Select distinct films_id from show_times where show_date >= '";
            echo jst_form_select((isset($_POST['films_id']) && !empty($_POST['films_id']))?$_POST['films_id']:'','films_id',$sql,'Select Film', false, 'onchange="document.films.submit();"');
			?>
        </form>
    	</td>
    </tr>
       <tr>
          <td colspan="1" width="300px"><?= show_times_table($_REQUEST['films_id'], true) ?></td>
      </tr>
</table>
