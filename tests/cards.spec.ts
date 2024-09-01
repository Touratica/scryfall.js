import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getRandomCard } from "~/cards";

const mock = new MockAdapter(axios);

describe("Cards", () => {
  beforeEach(() => {
    mock.reset();
  });

  describe("getRandomCard", () => {
    it("should return a random card", async () => {
      const mockResponse = {
        object: "card",
        id: "b81704d2-d555-4894-b36c-6b65d1ebe681",
        oracle_id: "5187c0b2-1996-42ea-bd77-3031b3add596",
        multiverse_ids: [540897],
        mtgo_id: 94422,
        arena_id: 78845,
        tcgplayer_id: 253715,
        cardmarket_id: 583538,
        name: "Fear of Death",
        lang: "en",
        released_at: "2021-11-19",
        uri: "https://api.scryfall.com/cards/b81704d2-d555-4894-b36c-6b65d1ebe681",
        scryfall_uri:
          "https://scryfall.com/card/vow/59/fear-of-death?utm_source=api",
        layout: "normal",
        highres_image: true,
        image_status: "highres_scan",
        image_uris: {
          small:
            "https://cards.scryfall.io/small/front/b/8/b81704d2-d555-4894-b36c-6b65d1ebe681.jpg?1643587816",
          normal:
            "https://cards.scryfall.io/normal/front/b/8/b81704d2-d555-4894-b36c-6b65d1ebe681.jpg?1643587816",
          large:
            "https://cards.scryfall.io/large/front/b/8/b81704d2-d555-4894-b36c-6b65d1ebe681.jpg?1643587816",
          png: "https://cards.scryfall.io/png/front/b/8/b81704d2-d555-4894-b36c-6b65d1ebe681.png?1643587816",
          art_crop:
            "https://cards.scryfall.io/art_crop/front/b/8/b81704d2-d555-4894-b36c-6b65d1ebe681.jpg?1643587816",
          border_crop:
            "https://cards.scryfall.io/border_crop/front/b/8/b81704d2-d555-4894-b36c-6b65d1ebe681.jpg?1643587816",
        },
        mana_cost: "{1}{U}",
        cmc: 2,
        type_line: "Enchantment — Aura",
        oracle_text:
          "Enchant creature\nWhen Fear of Death enters, mill two cards. (Put the top two cards of your library into your graveyard.)\nEnchanted creature gets -X/-0, where X is the number of cards in your graveyard.",
        colors: ["U"],
        color_identity: ["U"],
        keywords: ["Enchant", "Mill"],
        legalities: {
          standard: "not_legal",
          future: "not_legal",
          historic: "legal",
          timeless: "legal",
          gladiator: "legal",
          pioneer: "legal",
          explorer: "legal",
          modern: "legal",
          legacy: "legal",
          pauper: "legal",
          vintage: "legal",
          penny: "legal",
          commander: "legal",
          oathbreaker: "legal",
          standardbrawl: "not_legal",
          brawl: "legal",
          alchemy: "not_legal",
          paupercommander: "legal",
          duel: "legal",
          oldschool: "not_legal",
          premodern: "not_legal",
          predh: "not_legal",
        },
        games: ["arena", "paper", "mtgo"],
        reserved: false,
        foil: true,
        nonfoil: true,
        finishes: ["nonfoil", "foil"],
        oversized: false,
        promo: false,
        reprint: false,
        variation: false,
        set_id: "8144b676-569f-4716-8005-bc8f0778f3fa",
        set: "vow",
        set_name: "Innistrad: Crimson Vow",
        set_type: "expansion",
        set_uri:
          "https://api.scryfall.com/sets/8144b676-569f-4716-8005-bc8f0778f3fa",
        set_search_uri:
          "https://api.scryfall.com/cards/search?order=set&q=e%3Avow&unique=prints",
        scryfall_set_uri: "https://scryfall.com/sets/vow?utm_source=api",
        rulings_uri:
          "https://api.scryfall.com/cards/b81704d2-d555-4894-b36c-6b65d1ebe681/rulings",
        prints_search_uri:
          "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A5187c0b2-1996-42ea-bd77-3031b3add596&unique=prints",
        collector_number: "59",
        digital: false,
        rarity: "common",
        card_back_id: "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
        artist: "Anato Finnstark",
        artist_ids: ["05d233e7-4958-4f79-83e6-f9bf8b6ff78e"],
        illustration_id: "26ff5cc0-cb7e-4f15-bfb4-ca33d903a13a",
        border_color: "black",
        frame: "2015",
        full_art: false,
        textless: false,
        booster: true,
        story_spotlight: false,
        edhrec_rank: 20945,
        preview: {
          source: "Wizards of the Coast",
          source_uri:
            "https://magic.wizards.com/en/articles/archive/card-image-gallery/innistrad-crimson-vow",
          previewed_at: "2021-11-05",
        },
        prices: {
          usd: "0.03",
          usd_foil: "0.01",
          usd_etched: null,
          eur: "0.03",
          eur_foil: "0.05",
          tix: "0.03",
        },
        related_uris: {
          gatherer:
            "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=540897&printed=false",
          tcgplayer_infinite_articles:
            "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26partner%3Dscryfall%26q%3DFear%2Bof%2BDeath",
          tcgplayer_infinite_decks:
            "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26partner%3Dscryfall%26q%3DFear%2Bof%2BDeath",
          edhrec: "https://edhrec.com/route/?cc=Fear+of+Death",
        },
        purchase_uris: {
          tcgplayer:
            "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F253715%3Fpage%3D1",
          cardmarket:
            "https://www.cardmarket.com/en/Magic/Products/Singles/Innistrad-Crimson-Vow/Fear-of-Death?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
          cardhoarder:
            "https://www.cardhoarder.com/cards/94422?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall",
        },
      };

      mock
        .onGet("https://api.scryfall.com/cards/random")
        .reply(200, mockResponse);

      const card = await getRandomCard();

      // Check if card is of type Card
      expect(card).toHaveProperty("id", expect.any(String));
      expect(card).toHaveProperty("lang", expect.any(String));
      expect(card).toHaveProperty("object", "card");
      expect(card).toHaveProperty("layout", expect.any(String));
      expect(card).toHaveProperty("prints_search_uri", expect.any(String));
      expect(card).toHaveProperty("rulings_uri", expect.any(String));
      expect(card).toHaveProperty("scryfall_uri", expect.any(String));
      expect(card).toHaveProperty("uri", expect.any(String));
    });

    it("should handle errors", async () => {
      mock.onGet("https://api.scryfall.com/cards/random").reply(500);

      const card = await getRandomCard();

      expect(card).toBeUndefined();
    });
  });
});
