import { useState } from 'react';
import { Container, Title, StyledForm, StyledInput, StyledButton } from './SearchForm.styled';

export const SearchForm = ({setQuery, handleSearch}) => {
    const [queryValue, setQueryValue] = useState('');

    const handleChange = (e) => {
      const newValue = e.target.value;
      setQueryValue(newValue);
      setQuery(newValue);
    }

    return (
        <Container>
          <Title>Find your previous orders</Title>
          <StyledForm onSubmit={(e)=>handleSearch(e)}>
            <StyledInput
              type="text"
              placeholder="Enter email or phone number"
              value={queryValue}
              onChange={handleChange}
            />
            <StyledButton type="submit">Search</StyledButton>
          </StyledForm>
        </Container>
    )
}