-- Table: public.item

-- DROP TABLE public.item;

CREATE TABLE public.item
(
    id bigint NOT NULL DEFAULT nextval('item_id_seq'::regclass),
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    description character varying(200) COLLATE pg_catalog."default",
    CONSTRAINT item_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.item
    OWNER to postgres;