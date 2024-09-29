import { on, EventEmitter } from 'events';
import { get } from 'http';

export async function* fun(ee: EventEmitter) {
  console.log('Генератор запущен');
  
  const res = get('a', (response) => {

  }) 
  

  for await (const eventArgs of on(res, 'data', { close: ['end'] })) {
    yield eventArgs[0];
  }
  console.log('Итератор on завершён');
}

const ee = new EventEmitter();

async function test(){
  const generator = fun(ee);

  for await (const val of generator) {
    console.log('Получено:', val);
  }

  console.log('Генератор завершён');
};

// Эмитируем события
setTimeout(() => ee.emit('data', 'First'), 1000);
setTimeout(() => ee.emit('data', 'Second'), 2000);
setTimeout(() => ee.emit('data', 'Third'), 3000);
setTimeout(() => ee.emit('data', 'Fourth'), 4000);
setTimeout(() => ee.emit('end', 'ADSSAD'), 5000);