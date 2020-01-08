import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ database: 'manage', orderBy: { name: 'ASC' }})
class Foo {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  bar: string
}

export default Foo