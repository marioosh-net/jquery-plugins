/**
 * populate children inputs identified by attribute attr with JSON
 * 
 * example:
 * 		$('#id_form').myPopulate(json, 'name');
 * 
 * json: { "name" : "Jack", "id" : "12", "description" : "description..." }
 * form:
 * 		<form>
 * 			<input type="text" name="name" />
 * 			<input type="text" name="id" />
 * 			<textarea type="text" name="description" />
 * 		</form>
 * 		
 */
(function($) {
	$.fn.myPopulate = function(json, attr) {
		var form = $(this);
		$.each(json, function(key, value) {
			form.children('[' + attr + '="' + key + '"]').val(value);
		});
	};
})(jQuery);

