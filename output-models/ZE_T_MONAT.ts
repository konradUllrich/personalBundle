import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ZE_T_MONATAttributes {
    L_JAHR?: number;
    STR_ZEITIST?: string;
    REF_FREIGABESTATUS?: string;
    L_ZEITSALDOSEKUNDEN?: number;
    L_ZEITISTSEKUNDEN?: number;
    STR_MONAT?: string;
    L_ZEITUEBERTRAGSEKUNDEN?: number;
    DTINSERT?: Date;
    STRID: string;
    REF_BENUTZER?: number;
    STR_MITARBEITERIN?: string;
    REF_PERSONAL?: string;
    STR_FUEHRUNGSKRAFT?: string;
    L_KAPPUNGSGRENZE?: number;
    LUSERID?: number;
    L_MONAT?: number;
    STR_ZEITUEBERTRAG?: string;
    LUSERIDINSERT?: number;
    B_KAPPUNGSGRENZEEIN?: boolean;
    STR_ZEITSALDO?: string;
    REF_FK_BENUTZER?: number;
    STR_AMPEL?: string;
    REF_STATUS?: string;
    REF_BL?: string;
    DTEDIT?: Date;
    REF_FK_PERSONAL?: string;
    B_ARCHIV?: boolean;
    REF_SALDENKONTROLLE?: string;
    STR_STELLENZEICHEN?: string;
    STR_REFERAT?: string;
    TXT_BEGRUENDUNGBEIABLEHNUNG?: string;
    DT_LOESCHDATUM?: Date;
    B_GELOESCHT?: boolean;
    STR_ZEITRAUMBUCHUNGSART?: string;
    DT_ZEITRAUMVON?: Date;
    DT_ZEITRAUMBIS?: Date;
}

@Table({
	tableName: "ZE_T_MONAT",
	timestamps: false 
})
export class ZE_T_MONAT extends Model<ZE_T_MONATAttributes, ZE_T_MONATAttributes> implements ZE_T_MONATAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_JAHR?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ZEITIST?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_FREIGABESTATUS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ZEITSALDOSEKUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ZEITISTSEKUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_MONAT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ZEITUEBERTRAGSEKUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_BENUTZER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_MITARBEITERIN?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_PERSONAL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_FUEHRUNGSKRAFT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_KAPPUNGSGRENZE?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_MONAT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ZEITUEBERTRAG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_KAPPUNGSGRENZEEIN?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ZEITSALDO?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_FK_BENUTZER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_AMPEL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_STATUS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_BL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_FK_PERSONAL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ARCHIV?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_SALDENKONTROLLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STELLENZEICHEN?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_REFERAT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BEGRUENDUNGBEIABLEHNUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_LOESCHDATUM?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_GELOESCHT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ZEITRAUMBUCHUNGSART?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_ZEITRAUMVON?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_ZEITRAUMBIS?: Date;

}