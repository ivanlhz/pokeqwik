import {describe, expect, test, vi} from "vitest";
import {GetPokemonsHttpService} from "~/service/GetPokemonsHttpService";

const url ='https://ivanlhz.dev'
const service = new GetPokemonsHttpService(url)
describe('GetPokkemonsHttpService',() => {
    test('GetPokemonById should call fetch with the right url', () => {
        vi.spyOn(global, 'fetch').mockResolvedValueOnce({ok: true, status: 200, json: async () => ({results: []}) } as Response)
        service.getPokemonById('123')
        expect(fetch).toHaveBeenCalledWith(`${url}/pokemon/123`)
    })

    test('getPokemons should call fetch with the right url', () => {
        vi.spyOn(global, 'fetch').mockResolvedValueOnce({ok: true, status: 200, json: async () => ({results: []}) } as Response)
        service.getPokemons(0, 10)
        expect(fetch).toHaveBeenCalledWith(`${url}/pokemon/?offset=0&limit=10`)
    })
})