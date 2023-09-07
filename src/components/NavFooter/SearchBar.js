
import Data from '../../DB/Toys.json';
import * as React from 'react';
import { useAutocomplete } from '@mui/base/useAutocomplete';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { Padding } from '@mui/icons-material';

const Label = styled('label')({
  display: 'inline-flex',
  margin: 20,
  marginRight:10,
  fontFamily:'cursive'
});

const Input = styled('input')(({ theme }) => ({
  borderRadius:4,
  width: 200,
  height : 35 ,
  outline:'none',
  fontFamily:'cursive',
  paddingLeft: 20 ,
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
  color: theme.palette.mode === 'light' ? '#000' : '#fff',
}));

const Listbox = styled('ul')(({ theme }) => ({
  
  width: 400,
  color:'black',
  borderRadius: 10 ,
  margin: 0,
  fontSize:16,
  fontFamily:'cursive',
  zIndex: 1,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: theme.palette.mode === 'light' ? 'white' : '#000',
  overflow: 'auto',
  maxHeight: 150,
  border: '1px solid rgba(0,0,0,.25)',
  '& li.Mui-focused': {
    backgroundColor: '#4a8df6',
    color: 'white',
    cursor: 'pointer',
    
  },
  '& li:active': {
    backgroundColor: '#2977f5',
    color: 'black',
    Padding: 10 
    
  }
}));

export default function UseAutocomplete() {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: Data,
    getOptionLabel: (option) => option.title,
  });

  return (
    <div className='hidden md:block'>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>Search for Toys:</Label>
        <Input {...getInputProps()} />
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <Link to={'/toy/' + option.Code}><li className='px-5 py-1' {...getOptionProps({ option, index })}>{option.title}</li></Link>
          ))}
        </Listbox>
      ) : null}
    </div>
  );
}


