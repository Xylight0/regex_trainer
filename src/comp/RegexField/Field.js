import React from 'react';
import Expression from './Expression/Expression';
import TextInput from './TextInput/TextInput';
import TextOutput from './TextOutput/TextOutput';

export default function Field() {
  return <div className='w-full h-full p-12 flex flex-col gap-16'>
      <Expression />
      <div className='flex flex-col w-full h-full gap-8'>
      <TextInput />
      <TextOutput />
      </div>
  </div>;
}
