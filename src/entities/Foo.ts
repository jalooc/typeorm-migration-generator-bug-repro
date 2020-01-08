import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ database: 'manage', orderBy: { name: 'ASC' }})
class Foo {
  @PrimaryGeneratedColumn('uuid')
  id: string
}

export default Foo