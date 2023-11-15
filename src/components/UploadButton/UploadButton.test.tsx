import "@testing-library/jest-dom";
import { render, fireEvent } from '@testing-library/react';
import { describe, expect, test } from "vitest"; 
import { UploadButton } from ".";

describe("UploadButton", () => {

    const setup = () => {
        const utils = render(<UploadButton />);
        const button = utils.getByTestId("file-input");

        return {
            button,
            ...utils
        }
    }

    test("Sould be able to upload a csv file from this button", () => {
        const { button } = setup()

        expect(fireEvent.change(button, {
            target: {
              files: [new File(['(⌐□_□)'], 'groceries.csv.', { type: 'csv'})],
            },
        })).toBeTruthy()        
    })

    test("Shouldn't be able to upload files that are note .csv", () => {
        const { button, debug } = setup();

        debug()

        try{
            fireEvent.change(button, {
                target: {
                  files: [new File(['(⌐□_□)'], 'chucknorris.png', {type: 'image/png'})],
                },
            })
        }catch(e){
            console.log('e', e)
        }
    })
})