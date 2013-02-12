define([], function() {

  var groups = {};

  groups.table = {
    "id":"directus_groups",
    "table_name":"directus_groups",
    "hidden":true,
    "single":false,
    "inactive_by_default": "0",
    "url": "api/1/groups"
  };

	groups.structure = [
    {
	    "id":"id",
	    "column_name":"id",
	    "ui":"numeric",
	    "type":"INT",
	    "system":true,
	    "hidden_list":true,
	    "hidden_input":true,
	  },
    {
	    "id":"name",
	    "column_name":"name",
	    "ui":"numeric",
	    "type":"VARCHAR",
	    "system":true,
	    "hidden_list":true,
	    "hidden_input":true,
	  },
    {
	    "id":"description",
	    "column_name":"description",
	    "ui":"textinput",
	    "type":"VARCHAR",
	    "system":false,
	    "hidden_list":true,
	    "hidden_input":true,
	  },
	];

  groups.preferences = {
    "columns_visible": "name,description",
    "sort": "id",
    "sort_order": "ASC",
  };

  return groups;

});