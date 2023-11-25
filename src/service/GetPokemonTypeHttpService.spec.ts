import {describe, expect, test, vi} from "vitest";
import {GetPokemonTypeHttpService} from "~/service/GetPokemonTypeHttpService";

const url ='https://ivanlhz.dev'
const service = new GetPokemonTypeHttpService(url)
describe('GetPokemonTypeHttpService', () => {
    test('Should call fetch with the right url', () => {
        const id = '123'
        vi.spyOn(global, 'fetch').mockResolvedValueOnce({ok: true, status: 200, json: async () => null } as Response)
        service.getType(id)
        expect(fetch).toHaveBeenCalledWith(`${url}/type/${id}`)
    })
})