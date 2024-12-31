/*
 * @Author: jason
 * @Date: 2024-11-22 15:54:53
 * @LastEditTime: 2024-12-19 14:43:17
 * @LastEditors: jason
 * @Description:
 * @FilePath: \nest-manage\src\entity-subscribers\user-subscriber.ts
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
import { QueryEvent } from 'typeorm/subscriber/event/QueryEvent';

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

    if (entity.password && entity.password !== event.databaseEntity.password) {
      entity.password = generateHash(entity.password!);
    }
  }
}
