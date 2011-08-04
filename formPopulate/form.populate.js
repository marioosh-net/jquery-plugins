/**
 * populate children inputs identified by attribute attr with JSON
 * 
 * Examples:
 *      json: { "name" : "Jack", "id" : "12", "description" : "description..." }
 * 		<form>
 * 			<input type="text" name="name" />
 * 			<input type="text" name="id" />
 * 			<textarea type="text" name="description" />
 * 		</form>
 * 		$('#form1').myPopulate(json, 'name');
 * 		
 * 		<form id="form2">
 * 			<input type="text" name="nick" alt="name" />
 * 			<input type="text" name="identifier" alt="id" />
 * 			<textarea type="text" name="desc" alt="description" />
 * 		</form>
 * 		$('#form2').myPopulate(json, 'alt');
 */
(function($) {
	$.fn.myPopulate = function(json, attr) {
		var form = $(this);
		$.each(json, function(key, value) {
			form.children('[' + attr + '="' + key + '"]').val(value);
		});
	};
})(jQuery);

