import type { INodeProperties } from 'n8n-workflow';

export const writtenStatementsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Written Statements"
					]
				}
			},
			"options": [
				{
					"name": "GET API Writtenstatements Statements",
					"value": "GET API Writtenstatements Statements",
					"action": "Returns a list of written statements",
					"description": "Returns a list of written statements",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/writtenstatements/statements"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/writtenstatements/statements",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Written Statements"
					],
					"operation": [
						"GET API Writtenstatements Statements"
					]
				}
			}
		},
		{
			"displayName": "Made When From",
			"name": "madeWhenFrom",
			"description": "Written statements made on or after the date specified. Date format yyyy-mm-dd",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "madeWhenFrom",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Written Statements"
					],
					"operation": [
						"GET API Writtenstatements Statements"
					]
				}
			}
		},
		{
			"displayName": "Made When To",
			"name": "madeWhenTo",
			"description": "Written statements made on or before the date specified. Date format yyyy-mm-dd",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "madeWhenTo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Written Statements"
					],
					"operation": [
						"GET API Writtenstatements Statements"
					]
				}
			}
		},
		{
			"displayName": "Search Term",
			"name": "searchTerm",
			"description": "Written questions / statements containing the search term specified, searches item content",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "searchTerm",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Written Statements"
					],
					"operation": [
						"GET API Writtenstatements Statements"
					]
				}
			}
		},
		{
			"displayName": "U IN",
			"name": "uIN",
			"description": "Written questions / statements with the uin specified",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "uIN",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Written Statements"
					],
					"operation": [
						"GET API Writtenstatements Statements"
					]
				}
			}
		},
		{
			"displayName": "Answering Bodies",
			"name": "answeringBodies",
			"description": "Written questions / statements relating to the answering bodies with the IDs specified",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "answeringBodies",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Written Statements"
					],
					"operation": [
						"GET API Writtenstatements Statements"
					]
				}
			}
		},
		{
			"displayName": "Members",
			"name": "members",
			"description": "Written questions / statements relating to the members with the IDs specified",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "members",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Written Statements"
					],
					"operation": [
						"GET API Writtenstatements Statements"
					]
				}
			}
		},
		{
			"displayName": "House",
			"name": "house",
			"description": "Written questions / statements relating to the House specified",
			"default": "Bicameral",
			"type": "options",
			"options": [
				{
					"name": "Bicameral",
					"value": "Bicameral"
				},
				{
					"name": "Commons",
					"value": "Commons"
				},
				{
					"name": "Lords",
					"value": "Lords"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "house",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Written Statements"
					],
					"operation": [
						"GET API Writtenstatements Statements"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"description": "Number of records to skip, default is 0",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Written Statements"
					],
					"operation": [
						"GET API Writtenstatements Statements"
					]
				}
			}
		},
		{
			"displayName": "Take",
			"name": "take",
			"description": "Number of records to take, default is 20",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "take",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Written Statements"
					],
					"operation": [
						"GET API Writtenstatements Statements"
					]
				}
			}
		},
		{
			"displayName": "Expand Member",
			"name": "expandMember",
			"description": "Expand the details of Members in the results",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "expandMember",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Written Statements"
					],
					"operation": [
						"GET API Writtenstatements Statements"
					]
				}
			}
		},
];
