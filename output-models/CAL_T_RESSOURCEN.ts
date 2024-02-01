import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface CAL_T_RESSOURCENAttributes {
    LUSERID?: number;
    REF_STANDORT?: string;
    DTEDIT?: Date;
    STR_ETAGE?: string;
    STR_INVENTARNUMMER?: string;
    TXT_BESCHREIBUNG?: string;
    B_DEAKTIVIERT?: boolean;
    STR_KURZBEZEICHNUNG?: string;
    TXT_RESERVIERBARESEQUIPMENT?: string;
    B_EQUIPMENTZUGEORDNET?: boolean;
    STR_RESSOURCE?: string;
    B_STANDARDAUSSTATTUNG?: boolean;
    STR_STANDORT?: string;
    TXT_EXTERNEVERWALTUNG?: string;
    B_ZUSAETZLICHESEQUIPMENTKONFIG?: boolean;
    REF_KATEGORIE?: string;
    TXT_GENEHMIGER?: string;
    L_FILEINFORMATION?: number;
    LUSERIDINSERT?: number;
    STR_KATEGORIE?: string;
    DTINSERT?: Date;
    DT_GUELTIGBIS?: Date;
    STRID: string;
    STR_SORTIERUNG?: string;
    STR_STANDARDFUERRAUM?: string;
    B_STANDARDAUSSTATTUNGKONFIGURI?: boolean;
    REF_C8E4B14F?: string;
    TXT_GENEHMIGUNGSINFO?: string;
    B_RAUM?: boolean;
    DT_GUELTIGVON?: Date;
    TXT_NACHRICHT?: string;
    B_EQUIPMENTAUSSTATTUNG?: boolean;
    TXT_VERWALTER?: string;
    B_BESTUHLUNG?: boolean;
    TXT_RESERVIERBARDURCH?: string;
}

@Table({
	tableName: "CAL_T_RESSOURCEN",
	timestamps: false 
})
export class CAL_T_RESSOURCEN extends Model<CAL_T_RESSOURCENAttributes, CAL_T_RESSOURCENAttributes> implements CAL_T_RESSOURCENAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_STANDORT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ETAGE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_INVENTARNUMMER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BESCHREIBUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_DEAKTIVIERT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KURZBEZEICHNUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_RESERVIERBARESEQUIPMENT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_EQUIPMENTZUGEORDNET?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_RESSOURCE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_STANDARDAUSSTATTUNG?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STANDORT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_EXTERNEVERWALTUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ZUSAETZLICHESEQUIPMENTKONFIG?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_KATEGORIE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_GENEHMIGER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KATEGORIE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_GUELTIGBIS?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SORTIERUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STANDARDFUERRAUM?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_STANDARDAUSSTATTUNGKONFIGURI?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_C8E4B14F?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_GENEHMIGUNGSINFO?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_RAUM?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_GUELTIGVON?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_NACHRICHT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_EQUIPMENTAUSSTATTUNG?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_VERWALTER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_BESTUHLUNG?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_RESERVIERBARDURCH?: string;

}