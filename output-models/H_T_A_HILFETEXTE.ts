import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface H_T_A_HILFETEXTEAttributes {
    FKSTRID?: string;
    STR_TITEL?: string;
    TXT_HILFE?: string;
    DTINSERT?: Date;
    L_FILEINFORMATION?: number;
    STRID: string;
    DTEDIT?: Date;
    LUSERID?: number;
    L_SORTIERFELD?: number;
    LUSERIDINSERT?: number;
}

@Table({
	tableName: "H_T_A_HILFETEXTE",
	timestamps: false 
})
export class H_T_A_HILFETEXTE extends Model<H_T_A_HILFETEXTEAttributes, H_T_A_HILFETEXTEAttributes> implements H_T_A_HILFETEXTEAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITEL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_HILFE?: string;

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
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_SORTIERFELD?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

}