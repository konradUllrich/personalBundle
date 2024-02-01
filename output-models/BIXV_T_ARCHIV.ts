import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface BIXV_T_ARCHIVAttributes {
    LUSERIDINSERT?: number;
    TXT_VORGANG?: string;
    STR_ANTRAGSID?: string;
    LUSERID?: number;
    DTEDIT?: Date;
    TXT_RESPONSE?: string;
    DTINSERT?: Date;
    L_FILEINFORMATION?: number;
    STRID: string;
    TXT_DOKUMENTENMAPPE?: string;
}

@Table({
	tableName: "BIXV_T_ARCHIV",
	timestamps: false 
})
export class BIXV_T_ARCHIV extends Model<BIXV_T_ARCHIVAttributes, BIXV_T_ARCHIVAttributes> implements BIXV_T_ARCHIVAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_VORGANG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ANTRAGSID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_RESPONSE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_DOKUMENTENMAPPE?: string;

}