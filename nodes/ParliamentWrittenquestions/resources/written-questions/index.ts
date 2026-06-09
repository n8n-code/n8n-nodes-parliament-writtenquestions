import type { INodeProperties } from 'n8n-workflow';

export const writtenQuestionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Written Questions"
					]
				}
			},
			"options": [
				{
					"name": "GET API Writtenquestions Questions",
					"value": "GET API Writtenquestions Questions",
					"action": "Returns a list of written questions",
					"description": "Returns a list of written questions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/writtenquestions/questions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/writtenquestions/questions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Written Questions"
					],
					"operation": [
						"GET API Writtenquestions Questions"
					]
				}
			}
		},
		{
			"displayName": "Asking Member ID",
			"name": "askingMemberId",
			"description": "Written questions asked by member with member ID specified",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "askingMemberId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Written Questions"
					],
					"operation": [
						"GET API Writtenquestions Questions"
					]
				}
			}
		},
		{
			"displayName": "Answering Member ID",
			"name": "answeringMemberId",
			"description": "Written questions answered by member with member ID specified",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "answeringMemberId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Written Questions"
					],
					"operation": [
						"GET API Writtenquestions Questions"
					]
				}
			}
		},
		{
			"displayName": "Tabled When From",
			"name": "tabledWhenFrom",
			"description": "Written questions tabled on or after the date specified. Date format yyyy-mm-dd",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tabledWhenFrom",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Written Questions"
					],
					"operation": [
						"GET API Writtenquestions Questions"
					]
				}
			}
		},
		{
			"displayName": "Tabled When To",
			"name": "tabledWhenTo",
			"description": "Written questions tabled on or before the date specified. Date format yyyy-mm-dd",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tabledWhenTo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Written Questions"
					],
					"operation": [
						"GET API Writtenquestions Questions"
					]
				}
			}
		},
		{
			"displayName": "Answered",
			"name": "answered",
			"description": "Written questions that have been answered, unanswered or either.",
			"default": "Any",
			"type": "options",
			"options": [
				{
					"name": "Any",
					"value": "Any"
				},
				{
					"name": "Answered",
					"value": "Answered"
				},
				{
					"name": "Unanswered",
					"value": "Unanswered"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "answered",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Written Questions"
					],
					"operation": [
						"GET API Writtenquestions Questions"
					]
				}
			}
		},
		{
			"displayName": "Answered When From",
			"name": "answeredWhenFrom",
			"description": "Written questions answered on or after the date specified. Date format yyyy-mm-dd",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "answeredWhenFrom",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Written Questions"
					],
					"operation": [
						"GET API Writtenquestions Questions"
					]
				}
			}
		},
		{
			"displayName": "Answered When To",
			"name": "answeredWhenTo",
			"description": "Written questions answered on or before the date specified. Date format yyyy-mm-dd",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "answeredWhenTo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Written Questions"
					],
					"operation": [
						"GET API Writtenquestions Questions"
					]
				}
			}
		},
		{
			"displayName": "Question Status",
			"name": "questionStatus",
			"description": "Written questions with the status specified",
			"default": "NotAnswered",
			"type": "options",
			"options": [
				{
					"name": "Not Answered",
					"value": "NotAnswered"
				},
				{
					"name": "Answered Only",
					"value": "AnsweredOnly"
				},
				{
					"name": "All Questions",
					"value": "AllQuestions"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "questionStatus",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Written Questions"
					],
					"operation": [
						"GET API Writtenquestions Questions"
					]
				}
			}
		},
		{
			"displayName": "Include Withdrawn",
			"name": "includeWithdrawn",
			"description": "Include written questions that have been withdrawn",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeWithdrawn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Written Questions"
					],
					"operation": [
						"GET API Writtenquestions Questions"
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
						"Written Questions"
					],
					"operation": [
						"GET API Writtenquestions Questions"
					]
				}
			}
		},
		{
			"displayName": "Corrected When From",
			"name": "correctedWhenFrom",
			"description": "Written questions corrected on or after the date specified. Date format yyyy-mm-dd",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "correctedWhenFrom",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Written Questions"
					],
					"operation": [
						"GET API Writtenquestions Questions"
					]
				}
			}
		},
		{
			"displayName": "Corrected When To",
			"name": "correctedWhenTo",
			"description": "Written questions corrected on or before the date specified. Date format yyyy-mm-dd",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "correctedWhenTo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Written Questions"
					],
					"operation": [
						"GET API Writtenquestions Questions"
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
						"Written Questions"
					],
					"operation": [
						"GET API Writtenquestions Questions"
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
						"Written Questions"
					],
					"operation": [
						"GET API Writtenquestions Questions"
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
						"Written Questions"
					],
					"operation": [
						"GET API Writtenquestions Questions"
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
						"Written Questions"
					],
					"operation": [
						"GET API Writtenquestions Questions"
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
						"Written Questions"
					],
					"operation": [
						"GET API Writtenquestions Questions"
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
						"Written Questions"
					],
					"operation": [
						"GET API Writtenquestions Questions"
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
						"Written Questions"
					],
					"operation": [
						"GET API Writtenquestions Questions"
					]
				}
			}
		},
];
