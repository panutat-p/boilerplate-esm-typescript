import { sleep } from './sleep.js'

sleep(2000).then(() => {
  console.log('🟢 done')
})

const fruits: Record<string, number> = {
  apple: 12,
  '🍌': 11,
  carrot: 10,
  // dragon: undefined, Type 'undefined' is not assignable
}

console.log('total key:', Object.keys(fruits).length)

if (fruits.apple) {
  console.log('apple exists')
}

if (fruits['🍌']) {
  console.log('🍌 exists')
}

if (Object.hasOwn(fruits, 'carrot')) {
  console.log('carrot exists')
}

if (!fruits.dragon) {
  console.log('❌ dragon does not exist')
}
