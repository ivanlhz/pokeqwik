import {describe, expect, test, vi} from "vitest";
import {GetPokemonTypeHttpService} from "~/service/GetPokemonTypeHttpService";

global.fetch = vi.fn()
const url ='https://ivanlhz.dev'
const service = new GetPokemonTypeHttpService(url)
describe('GetPokemonTypeHttpService', () => {
    test('Should call fetch with the right url', () => {
        const id = '123'
        service.getType(id)
        expect(fetch).toHaveBeenCalledWith(`${url}/type/${id}`)
    })
})