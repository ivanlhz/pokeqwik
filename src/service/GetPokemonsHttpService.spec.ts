import {describe, expect, test, vi} from "vitest";
import {GetPokemonsHttpService} from "~/service/GetPokemonsHttpService";

global.fetch = vi.fn()
const url ='https://ivanlhz.dev'
const service = new GetPokemonsHttpService(url)
describe('GetPokkemonsHttpService',() => {
    test('GetPokemonById should call fetch with the right url', () => {
        service.getPokemonById('123')
        expect(fetch).toHaveBeenCalledWith(`${url}/pokemon/123`)
    })

    test('getPokemons should call fetch with the right url', () => {
        service.getPokemons(0, 10)
        expect(fetch).toHaveBeenCalledWith(`${url}/pokemon/?offset=0&limit=10`)
    })
})