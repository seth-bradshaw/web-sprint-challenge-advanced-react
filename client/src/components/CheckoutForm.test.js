import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i) 
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)

    fireEvent.change(firstNameInput, { target:{value: 'Seth'}})
    fireEvent.change(lastNameInput, { target:{value: 'Bradshaw'}})
    fireEvent.change(addressInput, { target:{value: '1234 N Main'}})
    fireEvent.change(cityInput, { target:{value: 'City'}})
    fireEvent.change(stateInput, { target:{value: 'State'}})
    fireEvent.change(zipInput, { target:{value: '84015'}})

    const submitButton = screen.getByRole('button')
    fireEvent.click(submitButton)

    const successMessage = await screen.findByTestId(/successMessage/)
    expect(successMessage).toBeInTheDocument();

    //Testing to see if test inputs the text
    const newFirstNameInput = await screen.findAllByText(/Seth/i)
    expect(newFirstNameInput).toBeTruthy()

    const newLastNameInput = await screen.findAllByText(/Bradshaw/i)
    expect(newLastNameInput).toBeTruthy()

    const newAddressInput = await screen.findAllByText(/1234 N Main/i)
    expect(newAddressInput).toBeTruthy()

    const newCityInput = await screen.findAllByText(/City/i)
    expect(newCityInput).toBeTruthy()

    const newStateInput = await screen.findAllByText(/State/i)
    expect(newStateInput).toBeTruthy()

    const newZipInput = await screen.findAllByText(/84015/i)
    expect(newZipInput).toBeTruthy()

});
