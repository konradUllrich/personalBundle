import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PER_T_PERSONALAttributes {
    STR_FUEHRUNGSKRAFT?: string;
    B_EXTERNESPERSONAL?: boolean;
    STR_ORGAEBENE1?: string;
    L_FILEINFORMATION?: number;
    L_IDBENUTZERFUEHRUNGSKRAFT?: number;
    STR_STELLENZEICHEN?: string;
    STR_IDFUNKTIONLOKAL?: string;
    L_STARTWERTARBEITSZEITKONTO?: number;
    DTEDIT?: Date;
    STR_EMAIL?: string;
    L_FUEHRUNGSKRAFTID?: number;
    STR_TELEFONNUMMER?: string;
    B_KAPPUNGSGRENZEEIN?: boolean;
    DTINSERT?: Date;
    DT_BEFRISTUNGBIS?: Date;
    STR_ORGAEBENE3?: string;
    STR_VOLLERNAME?: string;
    STR_BUERO?: string;
    STRID: string;
    TXT_AUFGABENBESCHREIBUNG?: string;
    STR_ORGAEBENE0?: string;
    L_IDFUEHRUNGSKRAFT?: number;
    REF_FUNKTION?: string;
    STR_TITEL?: string;
    STR_ANREDE?: string;
    STR_EXTERNEBUEROLEITUNG?: string;
    STR_GESCHLECHT?: string;
    STR_NACHNAME?: string;
    TXT_ZUSATZFUNKTIONEN?: string;
    TXT_BETEILIGUNGSFUNKTION?: string;
    LUSERIDINSERT?: number;
    TXT_BEMERKUNG?: string;
    L_IDBENUTZER?: number;
    STR_ZUSTAENDIGEBUEROLEITUNG?: string;
    REF_ART?: number;
    STR_PERSONALNUMMER?: string;
    REF_STANDORT?: string;
    STR_ORGAEBENE4?: string;
    REF_FK_PERSONAL?: string;
    STR_STARTWERTARBEITSZEITKONTO?: string;
    STR_VORNAME?: string;
    STR_MOBILNUMMER?: string;
    DT_AUSTRITTSDATUM?: Date;
    STR_FUNKTION?: string;
    REF_FK_BENUTZER?: number;
    REF_BENUTZER?: number;
    STR_ORGAEBENE2?: string;
    LUSERID?: number;
    REF_BL?: string;
    DT_EINTRITTSDATUM?: Date;
    STR_ARBEITSZEITENVALIDIERUNG?: string;
    L_KAPPUNGSGRENZE?: number;
    L_ZEITERFASSUNGBEGINNJAHR?: number;
    L_ZEITERFASSUNGBEGINNMONAT?: number;
    B_ZEITERFASSUNG?: boolean;
    STR_MOBILRUFNUMMER?: string;
    L_STARTWERTSTUNDEN?: number;
    L_STARTWERTMINUTEN?: number;
    L_STARTWERTSEKUNDEN?: number;
    B_EINGERICHTET?: boolean;
    STR_STARTWERTPLUSMINUS?: string;
}

@Table({
	tableName: "PER_T_PERSONAL",
	timestamps: false 
})
export class PER_T_PERSONAL extends Model<PER_T_PERSONALAttributes, PER_T_PERSONALAttributes> implements PER_T_PERSONALAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_FUEHRUNGSKRAFT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_EXTERNESPERSONAL?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ORGAEBENE1?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_IDBENUTZERFUEHRUNGSKRAFT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STELLENZEICHEN?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_IDFUNKTIONLOKAL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_STARTWERTARBEITSZEITKONTO?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_EMAIL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FUEHRUNGSKRAFTID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TELEFONNUMMER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_KAPPUNGSGRENZEEIN?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_BEFRISTUNGBIS?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ORGAEBENE3?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_VOLLERNAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BUERO?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_AUFGABENBESCHREIBUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ORGAEBENE0?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_IDFUEHRUNGSKRAFT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_FUNKTION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITEL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ANREDE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_EXTERNEBUEROLEITUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_GESCHLECHT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_NACHNAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_ZUSATZFUNKTIONEN?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BETEILIGUNGSFUNKTION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BEMERKUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_IDBENUTZER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ZUSTAENDIGEBUEROLEITUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_ART?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PERSONALNUMMER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_STANDORT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ORGAEBENE4?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_FK_PERSONAL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STARTWERTARBEITSZEITKONTO?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_VORNAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_MOBILNUMMER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_AUSTRITTSDATUM?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_FUNKTION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_FK_BENUTZER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_BENUTZER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ORGAEBENE2?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_BL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_EINTRITTSDATUM?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ARBEITSZEITENVALIDIERUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_KAPPUNGSGRENZE?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ZEITERFASSUNGBEGINNJAHR?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ZEITERFASSUNGBEGINNMONAT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ZEITERFASSUNG?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_MOBILRUFNUMMER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_STARTWERTSTUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_STARTWERTMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_STARTWERTSEKUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_EINGERICHTET?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STARTWERTPLUSMINUS?: string;

}