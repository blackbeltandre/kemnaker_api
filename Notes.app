{
	"info": {
		"_postman_id": "84cd3df9-1422-4d3b-8475-7034a2a2a961",
		"name": "Bukutamu",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Get all data",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{base_url}}/bukutamu",
					"host": [
						"{{base_url}}"
					],
					"path": [
						"bukutamu"
					]
				}
			},
			"response": []
		},
		{
			"name": "Post data",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"pengirim\": \"Jos\",\n    \"email\": \"jos@gmail.com\",\n    \"subject\": \"Jos just test post data bukutamu\",\n    \"pesan\": \"ini adalah test data dari Jos ,atau dari front end aplikasi\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{base_url}}/bukutamu/save",
					"host": [
						"{{base_url}}"
					],
					"path": [
						"bukutamu",
						"save"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete data",
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "",
						"value": "",
						"type": "text",
						"disabled": true
					}
				],
				"url": {
					"raw": "{{base_url}}/bukutamu/delete/4",
					"host": [
						"{{base_url}}"
					],
					"path": [
						"bukutamu",
						"delete",
						"4"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get data per page",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{base_url}}/bukutamu/?page=2",
					"host": [
						"{{base_url}}"
					],
					"path": [
						"bukutamu",
						""
					],
					"query": [
						{
							"key": "page",
							"value": "2"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Update data",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n            \"pengirim\": \"Joshua\",\n            \"email\": \"joshua@gmail.com\",\n            \"subject\": \"Joshua just test post data bukutamu\",\n            \"pesan\": \"ini adalah test data dari joshua ,atau dari front end aplikasi\",\n            \"date_post\": \"2021-9-30 20:11:52\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{base_url}}/bukutamu/update/3",
					"host": [
						"{{base_url}}"
					],
					"path": [
						"bukutamu",
						"update",
						"3"
					]
				}
			},
			"response": []
		}
	]
}