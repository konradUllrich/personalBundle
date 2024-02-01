import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface BIXV_T_LOGAttributes {
    STRID: string;
    DTINSERT?: Date;
    LUSERID?: number;
    TXT_RESPONSE?: string;
    STR_ACTION?: string;
    STR_URL?: string;
    STR_ANTRAGSART?: string;
    STR_APPLICATIONID?: string;
    DTEDIT?: Date;
    LUSERIDINSERT?: number;
    STR_LASTMSGRECEIVED?: string;
    TXT_REQUEST?: string;
    STR_STATUS?: string;
    STR_PROZESSGUID?: string;
}

@Table({
	tableName: "BIXV_T_LOG",
	timestamps: false 
})
export class BIXV_T_LOG extends Model<BIXV_T_LOGAttributes, BIXV_T_LOGAttributes> implements BIXV_T_LOGAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_RESPONSE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ACTION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_URL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ANTRAGSART?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_APPLICATIONID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_LASTMSGRECEIVED?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_REQUEST?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STATUS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PROZESSGUID?: string;

}