import { SiGooglecloud, SiOpenai, SiShopify, SiStripe, SiAirtable, SiAsana, SiGooglebigquery, SiBrevo, SiContentful, SiDatabricks } from 'react-icons/si';
import { FaShieldAlt, FaUsers, FaBolt, FaAws } from 'react-icons/fa';

export const ALL_CONNECTORS = [
  { 
    id: 'cloud', name: 'Cloud', desc: 'Built-in backend, ready to use', enabled: true, bgColor: 'bg-gradient-to-tr from-orange-500 to-purple-600', icon: <SiGooglecloud className="w-5 h-5" />,
    longDesc: 'Cloud is a built-in backend tool that allows you to manage scalable infrastructure directly. This MCP server allows you to use Cloud as a tool in the agent.',
    docsLink: 'https://cloud.google.com/docs',
    createdBy: 'Google'
  },
  { 
    id: 'ai', name: 'AI', desc: 'Unlock powerful AI features', enabled: true, bgColor: 'bg-black', icon: <SiOpenai className="w-5 h-5" />,
    longDesc: 'OpenAI provides powerful AI features and models for natural language processing and generation. This MCP server allows you to use OpenAI as a tool in the agent.',
    docsLink: 'https://platform.openai.com/docs',
    createdBy: 'OpenAI'
  },
  { 
    id: 'shopify', name: 'Shopify', desc: 'Build an eCommerce store', enabled: true, bgColor: 'bg-[#95bf47]', icon: <SiShopify className="w-5 h-5" />,
    longDesc: 'Shopify is an eCommerce platform that allows you to build and manage online stores. This MCP server allows you to interact with Shopify storefronts and admin APIs.',
    docsLink: 'https://shopify.dev/docs',
    createdBy: 'Shopify'
  },
  { 
    id: 'stripe', name: 'Stripe', desc: 'Set up payments', enabled: true, bgColor: 'bg-[#635bff]', icon: <SiStripe className="w-5 h-5" />,
    longDesc: 'Stripe is a financial infrastructure platform for the internet. This MCP server allows you to manage payments, subscriptions, and customers.',
    docsLink: 'https://stripe.com/docs',
    createdBy: 'Stripe'
  },
  { 
    id: 'aikido', name: 'Aikido', desc: 'AI-powered security scanning and pentesting', enabled: false, bgColor: 'bg-[#190c37]', icon: <FaShieldAlt className="w-5 h-5" />,
    longDesc: 'Aikido is an AI-powered security scanning and pentesting platform. This MCP server allows you to automate security audits and vulnerability checks.',
    docsLink: 'https://docs.aikido.dev',
    createdBy: 'Aikido Security'
  },
  { 
    id: 'airtable', name: 'Airtable', desc: 'Spreadsheet-database hybrid and automation platform', enabled: false, bgColor: 'bg-white border border-gray-200 text-yellow-500', icon: <SiAirtable className="w-5 h-5" />,
    longDesc: 'Airtable is a spreadsheet-database hybrid and automation platform. This MCP server allows you to query records, create bases, and automate workflows.',
    docsLink: 'https://airtable.com/developers/web/api/introduction',
    createdBy: 'Airtable'
  },
  { 
    id: 'asana', name: 'Asana', desc: 'Work management platform for tasks, projects, and teams', enabled: false, bgColor: 'bg-[#f06a6a]', icon: <SiAsana className="w-5 h-5" />,
    longDesc: 'Asana is a work management platform for tasks, projects, and teams. This MCP server allows you to create issues, manage sprints, and track development.',
    docsLink: 'https://developers.asana.com/docs',
    createdBy: 'Asana'
  },
  { 
    id: 'ashby', name: 'Ashby', desc: 'Recruiting and applicant tracking system', enabled: false, bgColor: 'bg-[#405cf5]', icon: <FaUsers className="w-5 h-5" />,
    longDesc: 'Ashby is a recruiting and applicant tracking system. This MCP server allows you to manage candidates, schedules, and interview pipelines.',
    docsLink: 'https://developers.ashbyhq.com/docs',
    createdBy: 'Ashby'
  },
  { 
    id: 'attention', name: 'Attention', desc: 'Sales conversation intelligence and coaching API', enabled: false, bgColor: 'bg-[#212121]', icon: <FaBolt className="w-5 h-5" />,
    longDesc: 'Attention provides sales conversation intelligence and coaching APIs. This MCP server allows you to analyze calls and extract sales insights.',
    docsLink: 'https://docs.attention.tech',
    createdBy: 'Attention'
  },
  { 
    id: 'awss3', name: 'AWS S3', desc: 'Read and write data files in AWS S3 buckets', enabled: false, bgColor: 'bg-[#3b48cc]', icon: <FaAws className="w-5 h-5" />,
    longDesc: 'AWS S3 is an object storage service. This MCP server allows you to read, write, and manage data files in AWS S3 buckets securely.',
    docsLink: 'https://docs.aws.amazon.com/s3/',
    createdBy: 'Amazon Web Services'
  },
  { 
    id: 'bigquery', name: 'BigQuery', desc: 'Query and analyze data in BigQuery', enabled: false, bgColor: 'bg-[#4285f4]', icon: <SiGooglebigquery className="w-5 h-5" />,
    longDesc: 'BigQuery is a fully managed, AI-ready data analytics platform. This MCP server allows you to run SQL queries and analyze massive datasets.',
    docsLink: 'https://cloud.google.com/bigquery/docs',
    createdBy: 'Google'
  },
  { 
    id: 'brevo', name: 'Brevo', desc: 'Email, SMS, CRM, and marketing automation API', enabled: false, bgColor: 'bg-[#009286]', icon: <SiBrevo className="w-5 h-5" />,
    longDesc: 'Brevo is an email, SMS, CRM, and marketing automation platform. This MCP server allows you to send campaigns and manage marketing contacts.',
    docsLink: 'https://developers.brevo.com/',
    createdBy: 'Brevo'
  },
  { 
    id: 'contentful', name: 'Contentful', desc: 'Headless CMS for content delivery', enabled: false, bgColor: 'bg-[#1d63dd]', icon: <SiContentful className="w-5 h-5" />,
    longDesc: 'Contentful is a headless CMS for content delivery across multiple platforms. This MCP server allows you to fetch, create, and manage digital content.',
    docsLink: 'https://www.contentful.com/developers/docs/',
    createdBy: 'Contentful'
  },
  { 
    id: 'databricks', name: 'Databricks', desc: 'Unified analytics platform', enabled: false, bgColor: 'bg-[#ff3621]', icon: <SiDatabricks className="w-5 h-5" />,
    longDesc: 'Databricks is a unified analytics platform for massive scale data engineering and data science. This MCP server allows you to manage clusters and run jobs.',
    docsLink: 'https://docs.databricks.com/',
    createdBy: 'Databricks'
  },
  // Linear wasn't in ALL_CONNECTORS but it's in the user's screenshot, I should add it!
  { 
    id: 'linear', name: 'Linear', desc: 'Project management tool', enabled: false, bgColor: 'bg-[#f4f4f5]', icon: <div className="w-5 h-5 bg-black rounded-sm flex items-center justify-center text-white font-bold text-[10px]">L</div>,
    longDesc: 'Linear is a project management tool that allows you to create issues, manage sprints, and track development. This MCP server allows you to use Linear as a tool in the agent.',
    docsLink: 'https://linear.app/docs/mcp',
    createdBy: 'Linear'
  }
];
