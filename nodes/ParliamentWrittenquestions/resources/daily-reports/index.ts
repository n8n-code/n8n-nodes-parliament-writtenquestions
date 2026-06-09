import type { INodeProperties } from 'n8n-workflow';

export const dailyReportsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Daily Reports"
					]
				}
			},
			"options": [
				{
					"name": "GET Api Dailyreports Dailyreports",
					"value": "GET Api Dailyreports Dailyreports",
					"action": "Returns a list of daily reports",
					"description": "Returns a list of daily reports",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/dailyreports/dailyreports"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/dailyreports/dailyreports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Daily Reports"
					],
					"operation": [
						"GET Api Dailyreports Dailyreports"
					]
				}
			}
		},
		{
			"displayName": "Date From",
			"name": "dateFrom",
			"description": "Daily report with report date on or after the date specified. Date format yyyy-mm-dd",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "dateFrom",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Daily Reports"
					],
					"operation": [
						"GET Api Dailyreports Dailyreports"
					]
				}
			}
		},
		{
			"displayName": "Date To",
			"name": "dateTo",
			"description": "Daily report with report date on or before the date specified. Date format yyyy-mm-dd",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "dateTo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Daily Reports"
					],
					"operation": [
						"GET Api Dailyreports Dailyreports"
					]
				}
			}
		},
		{
			"displayName": "House",
			"name": "house",
			"description": "Daily report relating to the House specified. Defaults to Bicameral",
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
						"Daily Reports"
					],
					"operation": [
						"GET Api Dailyreports Dailyreports"
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
						"Daily Reports"
					],
					"operation": [
						"GET Api Dailyreports Dailyreports"
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
						"Daily Reports"
					],
					"operation": [
						"GET Api Dailyreports Dailyreports"
					]
				}
			}
		},
];
