import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { dailyReportsDescription } from './resources/daily-reports';
import { writtenQuestionsDescription } from './resources/written-questions';
import { writtenStatementsDescription } from './resources/written-statements';

export class ParliamentWrittenquestions implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Parliament Writtenquestions',
		name: 'N8nDevParliamentWrittenquestions',
		icon: { light: 'file:./parliament-writtenquestions.svg', dark: 'file:./parliament-writtenquestions.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Data around written questions and answers, as well as written ministerial statements',
		defaults: { name: 'Parliament Writtenquestions' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevParliamentWrittenquestionsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Daily Reports",
					"value": "Daily Reports",
					"description": ""
				},
				{
					"name": "Written Questions",
					"value": "Written Questions",
					"description": ""
				},
				{
					"name": "Written Statements",
					"value": "Written Statements",
					"description": ""
				}
			],
			"default": ""
		},
		...dailyReportsDescription,
		...writtenQuestionsDescription,
		...writtenStatementsDescription
		],
	};
}
