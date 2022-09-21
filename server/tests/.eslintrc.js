{
	"info": {
		"_postman_id": "b4a96de3-a7b7-42f0-8fbe-6157e562d77c",
		"name": "DogWalkerApp",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "POST/api/dogowners",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					},
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"dog_walker_name\": \"Navya\",\r\n    \"user_name\":\"PuliNavya\",\r\n    \"owner_id\":\"7\",\r\n    \"phone\": \"999999999\"\r\n\r\n}"
				},
				"url": {
					"raw": "{{host}}/api/dogowners",
					"host": [
						"{{host}}"
					],
					"path": [
						"api",
						"dogowners"
					]
				}
			},
			"response": []
		},
		{
			"name": "GET /api Copy",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					}
				],
				"url": {
					"raw": "{{host}}/api",
					"host": [
						"{{host}}"
					],
					"path": [
						"api"
					]
				}
			},
			"response": []
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "host",
			"value": "http://localhost:3000",
			"type": "string"
		}
	]
}