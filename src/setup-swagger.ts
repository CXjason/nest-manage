/*
 * @Author: jason
 * @Date: 2024-11-14 16:22:46
 * @LastEditTime: 2024-12-12 16:45:06
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\setup-swagger.ts
 *
 */
import type { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { knife4jSetup } from 'nest-knife4j';

export function setupSwagger(app: INestApplication): void {
  const documentBuilder = new DocumentBuilder()
    .setTitle('接口文档')
    .setDescription(
      `### REST

Routes is following REST standard (Richardson level 3)

<details><summary>Detailed specification</summary>
<p>

**List:**
  - \`GET /<resources>/\`
    - Get the list of **<resources>** as admin
  - \`GET /user/<user_id>/<resources>/\`
    - Get the list of **<resources>** for a given **<user_id>**
    - Output a **403** if logged user is not **<user_id>**

**Detail:**
  - \`GET /<resources>/<resource_id>\`
    - Get the detail for **<resources>** of id **<resource_id>**
    - Output a **404** if not found
  - \`GET /user/<user_id>/<resources>/<resource_id>\`
    - Get the list of **<resources>** for a given **user_id**
    - Output a **404** if not found
    - Output a **403** if:
      - Logged user is not **<user_id>**
      - The **<user_id>** have no access to **<resource_id>**

**Creation / Edition / Replacement / Suppression:**
  - \`<METHOD>\` is:
    - **POST** for creation
    - **PATCH** for update (one or more fields)
    - **PUT** for replacement (all fields, not used)
    - **DELETE** for suppression (all fields, not used)
  - \`<METHOD> /<resources>/<resource_id>\`
    - Create **<resources>** with id **<resource_id>** as admin
    - Output a **400** if **<resource_id>** conflicts with existing **<resources>**
  - \`<METHOD> /user/<user_id>/<resources>/<resource_id>\`
    - Create **<resources>** with id **<resource_id>** as a given **user_id**
    - Output a **409** if **<resource_id>** conflicts with existing **<resources>**
    - Output a **403** if:
      - Logged user is not **<user_id>**
      - The **<user_id>** have no access to **<resource_id>**
</p>
</details>`,
    );

  if (process.env.API_VERSION) {
    documentBuilder.setVersion(process.env.API_VERSION);
  }

  const apiPrefix = 'api';

  const document = SwaggerModule.createDocument(app, documentBuilder.build());
  SwaggerModule.setup(apiPrefix, app, document, {
    swaggerOptions: {
      //persistAuthorization: true,
    },
  });
  knife4jSetup(app, [
    {
      name: '2.X版本',
      url: `/api-json`,
      swaggerVersion: '2.0',
      location: `/api-json`,
    },
  ]);

  console.log(
    `Documentation: http://localhost:${process.env.PORT}/${apiPrefix}`,
  );
}
