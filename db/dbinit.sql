-- SEQUENCE: public.kemnaker_id_bukutamu_seq

-- DROP SEQUENCE public.kemnaker_id_bukutamu_seq;

CREATE SEQUENCE public.kemnaker_id_bukutamu_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public.kemnaker_id_bukutamu_seq
    OWNER TO postgres;
-- Table: public.master_bukutamu

-- DROP TABLE public.master_bukutamu;

CREATE TABLE public.master_bukutamu
(
    id_bukutamu bigint NOT NULL DEFAULT nextval('kemnaker_id_bukutamu_seq'::regclass),
    pengirim character varying(225) COLLATE pg_catalog."default",
    email character varying(225) COLLATE pg_catalog."default",
    subject character varying(500) COLLATE pg_catalog."default",
    pesan text COLLATE pg_catalog."default",
    date_post character varying(225) COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE public.master_bukutamu
    OWNER to postgres;