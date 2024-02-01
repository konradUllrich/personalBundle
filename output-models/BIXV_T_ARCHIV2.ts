import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface BIXV_T_ARCHIV2Attributes {
    STR_ANTRAGSID?: string;
    LUSERIDINSERT?: number;
    L_FILEINFORMATION?: number;
    LUSERID?: number;
    LID: number;
    DTEDIT?: Date;
    TXT_VORGANG?: string;
    TXT_REPSONSE?: string;
    DTINSERT?: Date;
    TXT_DOKUMENTENMAPPE?: string;
}

@Table({
	tableName: "BIXV_T_ARCHIV2",
	timestamps: false 
})
export class BIXV_T_ARCHIV2 extends Model<BIXV_T_ARCHIV2Attributes, BIXV_T_ARCHIV2Attributes> implements BIXV_T_ARCHIV2Attributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ANTRAGSID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_VORGANG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_REPSONSE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_DOKUMENTENMAPPE?: string;

}