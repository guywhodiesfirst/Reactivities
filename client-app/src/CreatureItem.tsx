import { Creature } from './demo'

interface Props {
    creature: Creature
}

export default function CreatureItem({creature} : Props) {
  return (
    <div key={creature.name}>
           <span>{creature.name}</span>
           <button onClick={() => creature.make_sound()}>Make sound</button>
        </div>
  )
}
