import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface BIXV_T_INBOXAttributes {
    TXT_DOKUMENTENMAPPE?: string;
    TXT_VORGANG_BACKUP?: string;
    DTEDIT?: Date;
    L_FILEINFORMATION?: number;
    DT_LOESCHDATUM?: Date;
    STR_ANTRAGSART?: string;
    STR_ANTRAGSID?: string;
    STR_AKTEID?: string;
    LUSERID?: number;
    L_FILEINFORMATION_1?: number;
    STR_TITEL?: string;
    L_VORGANGID?: number;
    DTINSERT?: Date;
    STRID: string;
    REF_STATUS?: string;
    TXT_VORGANG?: string;
    LUSERIDINSERT?: number;
    L_FILEINFORMATION_2?: number;
    STR_MSGID?: string;
    STR_VERBINDUNG?: string;
    STR_KURZBEZEICHNUNG?: string;
    B_VALID?: boolean;
    TXT_EMAIL?: string;
    REF_MATCHING?: number;
    B_MANUELLEBEARBEITUNG?: boolean;
    B_ARCHIV?: boolean;
    STR_VERSION?: string;
    L_FILEINFORMATION_3?: number;
    TXT_EXPORT?: string;
}

@Table({
	tableName: "BIXV_T_INBOX",
	timestamps: false 
})
export class BIXV_T_INBOX extends Model<BIXV_T_INBOXAttributes, BIXV_T_INBOXAttributes> implements BIXV_T_INBOXAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_DOKUMENTENMAPPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_VORGANG_BACKUP?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_LOESCHDATUM?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ANTRAGSART?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ANTRAGSID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_AKTEID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION_1?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITEL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_VORGANGID?: number;

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
    	type: DataType.STRING(255) 
    })
    	REF_STATUS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_VORGANG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION_2?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_MSGID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_VERBINDUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KURZBEZEICHNUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_VALID?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_EMAIL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_MATCHING?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_MANUELLEBEARBEITUNG?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ARCHIV?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_VERSION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION_3?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_EXPORT?: string;

}