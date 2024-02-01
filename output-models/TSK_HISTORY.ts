import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface TSK_HISTORYAttributes {
    DTEDIT?: Date;
    LUSERIDINSERT?: number;
    TXT_HISTORY?: string;
    FKSTRID?: string;
    DTINSERT?: Date;
    LUSERID?: number;
    STRID: string;
}

@Table({
	tableName: "TSK_HISTORY",
	timestamps: false 
})
export class TSK_HISTORY extends Model<TSK_HISTORYAttributes, TSK_HISTORYAttributes> implements TSK_HISTORYAttributes {

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
    	type: DataType.STRING(-1) 
    })
    	TXT_HISTORY?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

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
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

}