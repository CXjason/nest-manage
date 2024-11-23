/*
 * @Author: jason
 * @Date: 2024-11-22 15:54:53
 * @LastEditTime: 2024-11-22 16:01:04
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-test\src\entity-subscribers\user-subscriber.ts
 *
 */
import type {
  EntitySubscriberInterface,
  InsertEvent,
  UpdateEvent,
} from 'typeorm';
import { EventSubscriber } from 'typeorm';
import { UserEntity } from '../modules/user/user.entity';
import { generateHash } from 'src/common/utils';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<UserEntity> {
  listenTo(): typeof UserEntity {
    return UserEntity;
  }

  beforeInsert(event: InsertEvent<UserEntity>): void {
    if (event.entity.password) {
      event.entity.password = generateHash(event.entity.password);
    }
  }

  beforeUpdate(event: UpdateEvent<UserEntity>): void {
    // FIXME check event.databaseEntity.password
    const entity = event.entity as UserEntity;

    if (entity.password !== event.databaseEntity.password) {
      entity.password = generateHash(entity.password!);
    }
  }
}
