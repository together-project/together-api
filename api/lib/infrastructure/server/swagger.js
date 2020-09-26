export default {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'Together api',
    description: 'Together solutions project',
  },

  tags: [
    {
      name: 'User',
      description: 'API for user data',
    },
  ],

  schemes: ['https', 'http'],
  consumes: ['application/json'],
  produces: ['application/json'],

  paths: {
    '/api/users': {
      get: {
        tags: ['User'],
        summary: 'Show all users',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                users: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/User',
                  },
                },
              },
            },
          },
        },
      },
      post: {
        tags: ['User'],
        summary: 'Create user',
        parameters: [
          {
            in: 'body',
            name: 'Info',
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                email: {
                  type: 'string',
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                user: {
                  $ref: '#/definitions/User',
                },
              },
            },
          },
        },
      },
    },

    '/api/users/{id}': {
      get: {
        tags: ['User'],
        summary: 'Show user',
        parameters: [
          {
            in: 'path',
            name: 'id',
            schema: {
              type: 'integer',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                user: {
                  $ref: '#/definitions/User',
                },
              },
            },
          },
        },
      },
      put: {
        tags: ['User'],
        summary: 'Update user',
        parameters: [
          {
            in: 'path',
            name: 'id',
            schema: {
              type: 'integer',
            },
          },
          {
            in: 'body',
            name: 'Info',
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                email: {
                  type: 'string',
                },
              },
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                user: {
                  $ref: '#/definitions/User',
                },
              },
            },
          },
        },
      },
      delete: {
        tags: ['User'],
        summary: 'Delete user',
        parameters: [
          {
            in: 'path',
            name: 'id',
            schema: {
              type: 'integer',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'OK',
            schema: {
              properties: {
                message: {
                  type: 'string',
                },
                id: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  },

  definitions: {
    User: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        name: {
          type: 'string',
        },
        email: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
        },
        updatedAt: {
          type: 'string',
        },
      },
    },
  },
}
